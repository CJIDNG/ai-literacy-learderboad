# API Integration Guide

## Overview
This leaderboard application is ready to connect to your WhatsApp chatbot game API endpoints. The current implementation uses mock data that can be easily replaced.

## Data Structure

Each player object should have the following structure:

```typescript
{
  rank: number,         // Player's position in leaderboard (1, 2, 3, etc.)
  username: string,     // Player's display name
  phoneNumber: string,  // Masked phone number (e.g., "0803****241")
  points: number,       // Player's score
  streak: string        // Streak indicator (e.g., "🔥")
}
```

## API Integration Steps

### 1. Replace Mock Data in `/App.tsx`

Find these lines in `/App.tsx`:

```typescript
const mockMonthlyData = [...]
const mockAllTimeData = [...]
```

### 2. Add State for API Data

```typescript
import { useState, useEffect } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"monthly" | "alltime">("monthly");
  const [searchQuery, setSearchQuery] = useState("");
  const [monthlyData, setMonthlyData] = useState([]);
  const [allTimeData, setAllTimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data when component mounts
  useEffect(() => {
    fetchLeaderboardData();
  }, [activeTab]);

  const fetchLeaderboardData = async () => {
    setLoading(true);
    try {
      const endpoint = activeTab === "monthly" 
        ? "/api/leaderboard/monthly"
        : "/api/leaderboard/alltime";
      
      const response = await fetch(endpoint);
      const data = await response.json();
      
      if (activeTab === "monthly") {
        setMonthlyData(data);
      } else {
        setAllTimeData(data);
      }
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    } finally {
      setLoading(false);
    }
  };

  const currentData = activeTab === "monthly" ? monthlyData : allTimeData;
  
  // Rest of the component...
}
```

### 3. Add Loading State

Add this before the return statement:

```typescript
if (loading) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
      <p className="text-[#848a90]">Loading leaderboard...</p>
    </div>
  );
}
```

## Expected API Endpoints

### GET `/api/leaderboard/monthly`
Returns an array of player objects for the current month.

**Response:**
```json
[
  {
    "rank": 1,
    "username": "PlayerName",
    "phoneNumber": "0803****241",
    "points": 1520,
    "streak": "🔥"
  },
  ...
]
```

### GET `/api/leaderboard/alltime`
Returns an array of player objects for all-time rankings.

**Response:** Same structure as monthly endpoint.

## Responsive Design

The application is fully responsive with these breakpoints:

- **Mobile**: < 768px (md breakpoint)
  - Vertical stack of top 3 cards
  - Compact table layout
  - Hidden avatar in table rows
  - Stacked footer

- **Desktop**: ≥ 768px
  - Horizontal top 3 cards
  - Full table with all columns
  - Horizontal footer layout

## Features

1. **Search Functionality**: Filters players by username or phone number
2. **Tab Switching**: Toggle between Monthly and All Time leaderboards
3. **Smooth Scrolling**: "Scroll Up" button in footer
4. **Responsive Layout**: Optimized for both mobile and desktop views

## Notes

- The search is currently client-side. For large datasets, consider implementing server-side search.
- Rankings are displayed based on the `rank` property in the data.
- Points are automatically formatted with commas for readability.
