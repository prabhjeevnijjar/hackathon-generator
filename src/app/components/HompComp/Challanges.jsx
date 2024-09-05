'use client';
import React, { useEffect, useState } from 'react';
import HackathonCard from './HackathonCard';
import { usePostContext } from '@/context/PostContext';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Challanges = () => {
  const { fetchPosts, posts } = usePostContext(); // Fetch all posts
  const [statusFilters, setStatusFilters] = useState([]); // Status filters
  const [levelFilters, setLevelFilters] = useState([]); // Level filters
  const [filteredPosts, setFilteredPosts] = useState(posts); // Initially show all posts
  const [searchTerm, setSearchTerm] = useState('');

  // Handle status filter checkbox changes
  const handleStatusChange = (e) => {
    const value = e.target.value;
    setStatusFilters((prev) => (prev.includes(value) ? prev.filter((filter) => filter !== value) : [...prev, value]));
  };

  // Handle level filter checkbox changes
  const handleLevelChange = (e) => {
    const value = e.target.value;
    setLevelFilters((prev) => (prev.includes(value) ? prev.filter((filter) => filter !== value) : [...prev, value]));
  };

  // Effect to apply filters dynamically when checkboxes change
  useEffect(() => {
    // If no filters are selected, show all posts
    if (statusFilters.length === 0 && levelFilters.length === 0 && !searchTerm) {
      setFilteredPosts(posts);
    } else {
      // Apply filters
      const filters = {
        status: statusFilters,
        level: levelFilters,
        name: searchTerm,
      };
      const filtered = fetchPosts(filters);
      setFilteredPosts(filtered);
    }
  }, [searchTerm, statusFilters, levelFilters, posts, fetchPosts]);

  return (
    <>
      <div className="bg-bgSecondary">
        <div className="flex flex-col items-center justify-center">
          <h2 className=" text-white font-bold leading-[2.5rem] text-[1.75rem] mt-[5rem]">Explore Challenges</h2>

          <div className="w-full md:w-auto flex items-center space-x-2 my-[4rem] px-8">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="w-full md:w-96 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 "
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Filter</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-50">
                <DropdownMenuLabel>Filters</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/* Status Filters */}
                <div>
                  <h3 className="font-semibold text-[0.875rem] text-[#666666]">Status</h3>
                  <div className="flex flex-col gap-1 mt-1">
                    <label className="text-[0.875rem] gap-2 flex  text-[#666666]">
                      <input type="checkbox" value="Active" checked={statusFilters.includes('Active')} onChange={handleStatusChange} />
                      Active
                    </label>
                    <label className="text-[0.875rem] gap-2 flex text-[#666666]">
                      <input type="checkbox" value="Upcoming" checked={statusFilters.includes('Upcoming')} onChange={handleStatusChange} />
                      Upcoming
                    </label>
                    <label className="text-[0.875rem] gap-2 flex text-[#666666]">
                      <input type="checkbox" value="Past" checked={statusFilters.includes('Past')} onChange={handleStatusChange} />
                      Past
                    </label>
                  </div>
                </div>
                <hr className="my-1"></hr>
                {/* Level Filters */}
                <div>
                  <h3 className="font-semibold  text-[0.875rem] text-[#666666]">Level</h3>
                  <div className="flex flex-col gap-1">
                    <label className="text-[0.875rem] gap-2 flex text-[#666666]">
                      <input type="checkbox" value="easy" checked={levelFilters.includes('easy')} onChange={handleLevelChange} />
                      Easy
                    </label>
                    <label className="text-[0.875rem] gap-2 flex text-[#666666]">
                      <input type="checkbox" value="medium" checked={levelFilters.includes('medium')} onChange={handleLevelChange} />
                      Medium
                    </label>
                    <label className="text-[0.875rem] gap-2 flex text-[#666666]">
                      <input type="checkbox" value="hard" checked={levelFilters.includes('hard')} onChange={handleLevelChange} />
                      Hard
                    </label>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="bg-bgPrimary">
        <div className="px-[2rem] md:px-[6rem] 2xl:px-[25rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-[6rem] justify-items-center">
          {filteredPosts.length ? filteredPosts.map((item) => <HackathonCard key={item.id} data={item} />) : <p>No posts found</p>}
        </div>
      </div>
    </>
  );
};

export default Challanges;
