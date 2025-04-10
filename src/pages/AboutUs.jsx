import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import FullCalendar from '@fullcalendar/react'; // Import FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid'; // Import the day grid plugin

const AboutUs = () => {
    // Example events for the calendar
    const events = [
        { title: 'Japan Day', date: '2025-03-01', location: 'Corozal Town' },
        { title: 'Pop Up Shop', start: '2025-03-14', end: '2025-03-15', location: 'San Pedro' },
        { title: 'CJC Pop Up Shop', date: '2025-03-28', location: 'Corozal Town' },
        { title: 'CEMJC Pop Up Shop', date: '2025-04-10', location: 'San Roman Village, Corozal' },
        { title: 'Urban Brownie Basket 1 Year Anniversary Pop Up Shop', date: '2025-04-13', location: 'Benque Viejo, San Ignacio' },
    ];

    // State for modal visibility and selected event
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Loading state
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 750); // Simulate 750ms of loading
        return () => clearTimeout(timer);
    }, []);

    // Handle event click
    const handleEventClick = (info) => {
        const clickedEvent = events.find(
            (event) =>
                event.title === info.event.title.split(' (')[0] // Match the title
        );
        setSelectedEvent(clickedEvent);
        setIsModalOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
    };

    // Helper function to add one day to the end date
    const adjustEndDate = (endDate) => {
        const date = new Date(endDate);
        date.setDate(date.getDate() + 1); // Add one day
        return date; // Return the adjusted Date object
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-700 dark:text-gray-200 px-4 py-8 space-y-12">
            {isLoading ? (
                // Skeleton Loader
                <div>
                    {/* Skeleton for About Us Section */}
                    <div className="mb-8">
                        <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto animate-pulse mb-4 dark:bg-gray-600"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto animate-pulse mb-2 dark:bg-gray-600"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto animate-pulse mb-2 dark:bg-gray-600"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto animate-pulse dark:bg-gray-600"></div>
                    </div>
                </div>
            ) : (
                // Actual Content
                <>
                    {/* About Us Section */}
                    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 max-w-3xl w-full">
                        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            Welcome to thisNThatMixUpShop! We are dedicated to providing you with a unique shopping experience, offering a diverse range of products that cater to all your needs. Our mission is to bring together a mix of quality apparel, accessories, and collectibles that reflect your individuality.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                            At thisNThatMixUpShop, our carefully curated collections are designed to inspire and empower you to express your personal style.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                            Thank you for choosing us as your go-to shop for all things anime and unique. We look forward to serving you!
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4 text-center">Follow Us</h2>
                        <div className="flex justify-center space-x-6">
                            <a
                                href="https://www.instagram.com/thisnthatmixupshop/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-orange-500 text-3xl dark:text-gray-400"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100063759631451"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-orange-500 text-3xl dark:text-gray-400"
                            >
                                <FaFacebook />
                            </a>
                        </div>
                    </div>

                    {/* FullCalendar Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">Upcoming Events</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">Click on an event to learn more!</p>
                        <div className="w-full md:w-3/4 mx-auto aspect-w-16 aspect-h-9 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <FullCalendar
                                plugins={[dayGridPlugin]}
                                initialView="dayGridMonth"
                                events={events.map((event) => ({
                                    title: `${event.title} (${event.location})`,
                                    start: event.start || event.date,
                                    end: event.end ? adjustEndDate(event.end) : undefined,
                                    extendedProps: { location: event.location },
                                }))}
                                height="auto"
                                eventClick={handleEventClick}
                                dayHeaderClassNames="text-gray-700 dark:text-gray-200 font-bold" // Apply dark mode styling to day headers
                            />
                        </div>
                    </div>

                    {/* Facebook Live Embed */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-4 text-center">Watch Our New Products Live</h2>
                        <div className="flex justify-center">
                            <iframe
                                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100063759631451%2Fvideos%2F1715819459028193%2F&show_text=false&width=267&t=0"
                                width="267"
                                height="476"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>
                        </div>
                    </div>
                </>
            )}

            {/* Modal */}
            {isModalOpen && selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-11/12 max-w-md">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{selectedEvent.title}</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            <strong>Date:</strong>{' '}
                            {selectedEvent.start
                                ? `${new Date(`${selectedEvent.start}T00:00:00`).toLocaleDateString('en-US', {
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric',
                                  })}${
                                      selectedEvent.end
                                          ? ` to ${new Date(`${adjustEndDate(selectedEvent.end).toISOString().split('T')[0]}T00:00:00`).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}`
                                          : ''
                                  }`
                                : new Date(`${selectedEvent.date}T00:00:00`).toLocaleDateString('en-US', {
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric',
                                  })}
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            <strong>Location:</strong> {selectedEvent.location}
                        </p>
                        <button
                            onClick={closeModal}
                            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutUs;