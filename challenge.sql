-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2022 at 11:45 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `challenge`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `showtime` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `name`, `showtime`) VALUES
(4, 'Ghostbusters: Afterlife', '12:00:00'),
(5, 'Ghostbusters: Afterlife', '16:00:00'),
(6, 'Nightmare Alley', '13:30:00'),
(7, 'Nightmare Alley', '16:30:00'),
(10, 'Scream', '18:00:00'),
(1, 'Spider-Man: No Way Home', '11:00:00'),
(2, 'Spider-Man: No Way Home', '15:00:00'),
(3, 'Spider-Man: No Way Home', '20:00:00'),
(8, 'The King\'s Man', '10:30:00'),
(9, 'The King\'s Man', '19:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `seats`
--

CREATE TABLE `seats` (
  `id` int(11) NOT NULL,
  `row` varchar(1) NOT NULL,
  `seat_no` int(2) NOT NULL,
  `movie` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `seats`
--

INSERT INTO `seats` (`id`, `row`, `seat_no`, `movie`, `name`, `tel`) VALUES
(1, 'A', 2, 2, 'Julie', '0992341237'),
(7, 'C', 1, 2, 'Wannaporn', '023761821'),
(8, 'B', 4, 2, 'wannaporn chokvisavapornkul', '0123456789'),
(9, 'C', 8, 2, 'mingming', '098765431'),
(10, 'A', 5, 2, 'mingming', '098765431'),
(11, 'B', 7, 2, 'wannaporn', '0896688245'),
(12, 'A', 1, 10, 'max', '0274537281'),
(15, 'C', 6, 7, 'mat', '0829145432'),
(16, 'B', 8, 7, 'june', '0483273432'),
(17, 'B', 1, 10, 'ming', '0892313421'),
(18, 'A', 3, 10, 'ming', '0892313421'),
(21, 'D', 1, 10, 'wannaporn', '0725152777'),
(22, 'D', 3, 10, 'por', '0972815223'),
(23, 'A', 5, 10, 'por', '0972815223'),
(24, 'B', 6, 10, 'pim', '012239866'),
(25, 'B', 8, 2, 'test', '0892637193'),
(26, 'C', 1, 2, 'sally', '0825381539'),
(27, 'B', 1, 2, 'pim', '0182549294'),
(28, 'D', 5, 2, 'wannaporn', '0294732345'),
(29, 'D', 3, 2, 'oscar', '0926481213'),
(30, 'D', 7, 2, 'ostin', '0293612321'),
(31, 'C', 5, 9, 'minnie', '0293432123'),
(32, 'A', 1, 9, 'snoopy', '0212019359'),
(33, 'B', 4, 9, 'noe', '0962281232'),
(34, 'B', 7, 9, 'wanna', '0236715712'),
(35, 'C', 7, 6, 'pony', '0832129382');

-- --------------------------------------------------------
--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Unique Movie` (`name`,`showtime`);

--
-- Indexes for table `seats`
--
ALTER TABLE `seats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Movie FK` (`movie`);

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `seats`
--
ALTER TABLE `seats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `seats`
--
ALTER TABLE `seats`
  ADD CONSTRAINT `Movie FK` FOREIGN KEY (`movie`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
