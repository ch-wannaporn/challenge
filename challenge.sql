-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2022 at 02:39 PM
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
-- Table structure for table `playlists`
--

CREATE TABLE `playlists` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `playlists`
--

INSERT INTO `playlists` (`id`, `name`, `img`) VALUES
(1, 'Favorite Songs', '1642504950860_travis-yewell-F-B7kWlkxDQ-unsplash.jpg'),
(4, 'Chill Tracks', '1642504958070_saso-tusar-QtgGYlug6Cw-unsplash.jpg'),
(5, 'Party Playlist', NULL),
(7, 'Mega Hits', '1642504733443_c-d-x-PDX_a_82obo-unsplash.jpg'),
(8, 'Top 50 in US', '1642504740637_namroud-gorguis-FZWivbri0Xk-unsplash.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tracks`
--

CREATE TABLE `tracks` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `album` varchar(255) NOT NULL,
  `artist` varchar(255) NOT NULL,
  `preview` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `playlist` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tracks`
--

INSERT INTO `tracks` (`id`, `name`, `album`, `artist`, `preview`, `img`, `playlist`) VALUES
(1, 'Someone You Loved', 'Breach', 'Lewis Capaldi', 'https://cdns-preview-a.dzcdn.net/stream/c-a3001fef0ed7833e91971be2ee2d7927-7.mp3', 'https://api.deezer.com/album/78031872/image', 1),
(2, 'Black Beatles', 'SremmLife 2 (Deluxe)', 'Rae Sremmurd', 'https://cdns-preview-e.dzcdn.net/stream/c-ed9a64fa21d9d4e8d799232462a7ce22-6.mp3', 'https://api.deezer.com/album/13789618/image', 1),
(3, 'Blank Space', '1989 (Deluxe)', 'Taylor Swift', 'https://cdns-preview-6.dzcdn.net/stream/c-6e5160a0eb0a1e062f294a21148fd2fc-8.mp3', 'https://api.deezer.com/album/9007781/image', 1),
(5, 'WE ARE', '爵士Happy Hour', 'Jon Batiste', 'https://cdns-preview-8.dzcdn.net/stream/c-8f398dcabfefbe8cd20029b1f696ba53-4.mp3', 'https://api.deezer.com/album/286523842/image', 8);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `playlists`
--
ALTER TABLE `playlists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tracks`
--
ALTER TABLE `tracks`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Unique Track` (`name`,`album`,`artist`),
  ADD KEY `Playlist FK` (`playlist`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `playlists`
--
ALTER TABLE `playlists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tracks`
--
ALTER TABLE `tracks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tracks`
--
ALTER TABLE `tracks`
  ADD CONSTRAINT `Playlist FK` FOREIGN KEY (`playlist`) REFERENCES `playlists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
