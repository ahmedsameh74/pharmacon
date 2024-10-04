'use client';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import React, { useState } from 'react';

interface Job {
  title: string;
  description: string;
}

const CareersComp = () => {
  const locale = useLocale();
  const jobs: Job[] = [
    { title: 'Job Title 1', description: 'Job Description 1' },
    { title: 'Job Title 2', description: 'Job Description 2' },
    { title: 'Job Title 3', description: 'Job Description 3' },
    { title: 'Job Title 4', description: 'Job Description 4' },
    { title: 'Job Title 5', description: 'Job Description 5' },
    { title: 'Job Title 6', description: 'Job Description 6' },
    { title: 'Job Title 7', description: 'Job Description 7' },
    { title: 'Job Title 8', description: 'Job Description 8' },
    { title: 'Job Title 9', description: 'Job Description 9' },
    { title: 'Job Title 10', description: 'Job Description 10' }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  // Get the current jobs for the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-6 lg:px-0 my-4">
      {currentJobs.map((job, index) => (
        <div
          key={index}
          className="border-b border-gray-300 card pt-12 pb-6 flex flex-col space-y-4 hover:border-[#01547E] hover:text-[#01547E] transition duration-300"
        >
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <div className="flex justify-end">
            <Link
              className="text-[#01547E] hover:text-[#3b6980] transition duration-300 mt-2 inline-block text-end"
              href={`/${locale}/careers`}
            >
              View Job
            </Link>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center space-x-4 mt-8">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition ${
                currentPage === pageNumber
                  ? 'bg-[#00557C] text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default CareersComp;
