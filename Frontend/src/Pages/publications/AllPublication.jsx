import React, { useState } from "react";
import "./AllPublication.css";

const AllPublications = ({ publications = [] }) => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const years = [...new Set(publications.map((pub) => pub.year))].sort(
    (a, b) => b - a
  );
  const types = [...new Set(publications.map((pub) => pub.type))].sort();

  const filteredPublications = publications.filter((pub) => {
    const matchesYear = !selectedYear || pub.year.toString() === selectedYear;
    const matchesType = !selectedType || pub.type === selectedType;
    const matchesSearch =
      !searchQuery ||
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesYear && matchesType && matchesSearch;
  });

  const handleClearSearch = () => setSearchQuery("");

  return (
    <div className="allpub-container">
      <div className="allpub-head">
        <div className="allpub-head-inner">
          <h1 className="allpub-title">All publications</h1>

          {/* Filters */}
          <div className="allpub-filters">
            <div className="allpub-filter-label">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
              <span>Select filter:</span>
            </div>

            <div className="allpub-selects">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="allpub-select"
              >
                <option value="">Filter by Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="allpub-select"
              >
                <option value="">Filter by Type</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="allpub-search">
              <input
                type="text"
                placeholder="Search ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="allpub-search-input"
              />
              <button className="allpub-search-btn">🔍</button>
            </div>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="allpub-list">
        <div className="allpub-list-wrap">
          {filteredPublications.length ? (
            filteredPublications.map((pub) => (
              <div key={pub.id} className="allpub-item">
                <div className="allpub-meta">
                  <span>{pub.type}</span>
                  <span>|</span>
                  <span>{pub.year}</span>
                </div>

                <h2 className="allpub-item-title">{pub.title}</h2>

                {pub.source && <p className="allpub-source">{pub.source}</p>}

                <p className="allpub-authors">{pub.authors}</p>
              </div>
            ))
          ) : (
            <p className="allpub-empty">
              No publications found matching your criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllPublications;
