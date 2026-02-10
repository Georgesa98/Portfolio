import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface AnimatedLine {
  id: number;
  path: string;
  length: number;
}

export function GridBackground() {
  const [lines, setLines] = useState<AnimatedLine[]>([]);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const gridSize = 50;
  const lineCount = 4;

  // Update dimensions on mount and resize (debounced)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const updateDimensions = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 250); // Debounce 250ms
    };

    // Set initial dimensions immediately
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timeoutId);
    };
  }, []);

  // Generate a random path along the grid, constrained to viewport
  const generatePath = () => {
    const segments = Math.floor(Math.random() * 2) + 3; // 3-4 segments
    const maxWidth = dimensions.width;
    const maxHeight = dimensions.height;
    
    // Start in visible area, constrained to viewport
    const maxGridX = Math.floor(maxWidth / gridSize) - 4;
    const maxGridY = Math.floor(maxHeight / gridSize) - 4;
    
    const startGridX = Math.floor(Math.random() * Math.max(1, maxGridX - 4)) + 2;
    const startGridY = Math.floor(Math.random() * Math.max(1, maxGridY - 4)) + 2;
    
    const startX = startGridX * gridSize;
    const startY = startGridY * gridSize;
    
    let pathData = `M ${startX} ${startY}`;
    let currentX = startX;
    let currentY = startY;
    let totalLength = 0;
    
    for (let i = 0; i < segments; i++) {
      const isHorizontal = Math.random() > 0.5;
      
      // Allow longer paths that can traverse the screen
      const distance = (Math.floor(Math.random() * 5) + 3) * gridSize; // 3-7 grid units
      
      if (isHorizontal) {
        const availableRight = maxWidth - currentX;
        const availableLeft = currentX;
        
        // Choose direction based on available space
        const canGoRight = availableRight > distance;
        const canGoLeft = availableLeft > distance;
        
        let direction;
        if (canGoRight && canGoLeft) {
          direction = Math.random() > 0.5 ? 1 : -1;
        } else if (canGoRight) {
          direction = 1;
        } else if (canGoLeft) {
          direction = -1;
        } else {
          continue; // Skip if no room
        }
        
        currentX = Math.max(gridSize * 2, Math.min(maxWidth - gridSize * 2, currentX + distance * direction));
        pathData += ` L ${currentX} ${currentY}`;
        totalLength += Math.abs(distance);
      } else {
        const availableDown = maxHeight - currentY;
        const availableUp = currentY;
        
        const canGoDown = availableDown > distance;
        const canGoUp = availableUp > distance;
        
        let direction;
        if (canGoDown && canGoUp) {
          direction = Math.random() > 0.5 ? 1 : -1;
        } else if (canGoDown) {
          direction = 1;
        } else if (canGoUp) {
          direction = -1;
        } else {
          continue;
        }
        
        currentY = Math.max(gridSize * 2, Math.min(maxHeight - gridSize * 2, currentY + distance * direction));
        pathData += ` L ${currentX} ${currentY}`;
        totalLength += Math.abs(distance);
      }
    }
    
    return { pathData, length: totalLength };
  };

  // Initialize and regenerate lines when dimensions change
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;
    
    const initialLines = Array.from({ length: lineCount }, (_, i) => {
      const { pathData, length } = generatePath();
      return {
        id: Date.now() + i,
        path: pathData,
        length,
      };
    });
    setLines(initialLines);

    // Regenerate lines at staggered intervals
    const intervals = initialLines.map((_, index) => {
      return setInterval(() => {
        const { pathData, length } = generatePath();
        setLines(prev => prev.map((line, i) => 
          i === index ? { id: Date.now() + index, path: pathData, length } : line
        ));
      }, 5000 + index * 800); // Staggered regeneration
    });

    return () => intervals.forEach(clearInterval);
  }, [dimensions]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Static grid lines */}
        <defs>
          <pattern
            id="grid"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            <line
              x1={0}
              y1={0}
              x2={gridSize}
              y2={0}
              stroke="rgba(60, 60, 60, 0.6)"
              strokeWidth="1"
            />
            <line
              x1={0}
              y1={0}
              x2={0}
              y2={gridSize}
              stroke="rgba(60, 60, 60, 0.6)"
              strokeWidth="1"
            />
          </pattern>
          
          {/* Enhanced glow filter for animated lines */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid pattern */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Animated tracing lines */}
        {lines.map((line, index) => {
          // Vary animation duration for more dynamic effect
          const duration = 3 + (index % 3) * 0.5; // 3s, 3.5s, or 4s
          const delay = index * 0.4;
          
          return (
            <motion.path
              key={line.id}
              d={line.path}
              stroke="#00ff88"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
              style={{ mixBlendMode: "screen" }}
              initial={{ 
                pathLength: 0,
                opacity: 0,
              }}
              animate={{ 
                pathLength: 1,
                opacity: [0, 0.9, 1, 0.7, 0],
              }}
              transition={{
                pathLength: { duration, ease: "easeInOut" },
                opacity: { 
                  duration,
                  times: [0, 0.15, 0.45, 0.75, 1],
                  ease: "easeInOut"
                },
                delay,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          );
        })}
      </svg>
      
      {/* Gradient fade overlay at edges for subtle fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/10 pointer-events-none" />
    </div>
  );
}
