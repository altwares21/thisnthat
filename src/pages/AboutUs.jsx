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
        return date.toISOString().split('T')[0]; // Return in YYYY-MM-DD format
    };

    return (
        <div className="container mx-auto px-4 py-8 text-center">
            {isLoading ? (
                // Skeleton Loader
                <div>
                    {/* Skeleton for About Us Section */}
                    <div className="mb-8">
                        <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto animate-pulse mb-4"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto animate-pulse mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto animate-pulse mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto animate-pulse"></div>
                    </div>

                    {/* Skeleton for Social Media Links */}
                    <div className="mb-8">
                        <div className="h-8 bg-gray-300 rounded w-1/4 mx-auto animate-pulse mb-4"></div>
                        <div className="flex justify-center space-x-6">
                            <div className="h-12 w-12 bg-gray-300 rounded-full animate-pulse"></div>
                            <div className="h-12 w-12 bg-gray-300 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {/* Skeleton for Calendar */}
                    <div>
                        <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto animate-pulse mb-4"></div>
                        <div className="h-96 bg-gray-300 rounded-lg animate-pulse"></div>
                    </div>
                </div>
            ) : (
                // Actual Content
                <>
                    {/* About Us Section */}
                    <div className="about-us-section">
                        <h1 className="text-3xl font-bold mb-4">About Us</h1>
                        <p className="text-lg">
                            Welcome to thisNThatMixUpShop! We are dedicated to providing you with a unique shopping experience, offering a diverse range of products that cater to all your needs. Our mission is to bring together a mix of quality apparel, accessories, and collectibles that reflect your individuality.
                        </p>
                        <p className="text-lg mt-4">
                            At thisNThatMixUpShop, our carefully curated collections are designed to inspire and empower you to express your personal style.
                        </p>
                        <p className="text-lg mt-4">
                            Thank you for choosing us as your go-to shop for all things anime and unique. We look forward to serving you!
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                        <div className="flex justify-center space-x-6">
                            <a
                                href="https://www.instagram.com/thisnthatmixupshop/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-orange-500 text-3xl"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100063759631451"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-orange-500 text-3xl"
                            >
                                <FaFacebook />
                            </a>
                        </div>
                    </div>

                    {/* FullCalendar Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
                        <p className="text-gray-600 mb-4">Click on an event to learn more!</p>
                        <div className="w-full max-w-2xl mx-auto aspect-square">
                            <FullCalendar
                                plugins={[dayGridPlugin]}
                                initialView="dayGridMonth"
                                events={events.map((event) => ({
                                    title: `${event.title} (${event.location})`,
                                    start: event.start || event.date,
                                    end: event.end ? adjustEndDate(event.end) : undefined,
                                    extendedProps: { location: event.location },
                                }))}
                                height="100%"
                                eventClick={handleEventClick}
                            />
                        </div>
                    </div>
                </>
            )}

            {/* Modal */}
            {isModalOpen && selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-11/12 max-w-md">
                        <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
                        <p className="text-lg">
                            <strong>Date:</strong>{' '}
                            {selectedEvent.start
                                ? `${selectedEvent.start} to ${selectedEvent.end || selectedEvent.start}`
                                : selectedEvent.date}
                        </p>
                        <p className="text-lg">
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