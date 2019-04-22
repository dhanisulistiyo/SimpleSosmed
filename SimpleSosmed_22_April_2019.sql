-- -------------------------------------------------------------
-- TablePlus 2.0(200)
--
-- https://tableplus.com/
--
-- Database: simple-sosmed
-- Generation Time: 2019-04-22 19:07:20.7270
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `timeline`;
CREATE TABLE `timeline` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `tweet` varchar(140) NOT NULL DEFAULT '',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'Inactive,active(0,1)',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `g_timeline_mapping_ibfk_1` (`user_id`),
  CONSTRAINT `g_timeline_mapping_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `user_timeline`;
CREATE TABLE `user_timeline` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `following_id` int(11) unsigned NOT NULL,
  `unique_key` int(11) unsigned NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_key` (`unique_key`),
  KEY `g_relations_ibfk_1` (`user_id`),
  KEY `g_realtions_ibfk_2` (`following_id`),
  CONSTRAINT `g_realtions_ibfk_2` FOREIGN KEY (`following_id`) REFERENCES `users` (`id`),
  CONSTRAINT `g_relations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `description` varchar(500) DEFAULT '',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'Inactive,active(0,1)',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

INSERT INTO `timeline` (`id`, `user_id`, `tweet`, `status`, `created_at`, `updated_at`) VALUES ('1', '1', 'test tweet....', '1', '2019-04-22 11:32:17', '2019-04-22 11:32:30'),
('2', '1', 'test', '1', '2019-04-22 11:07:12', '2019-04-22 11:07:12');

INSERT INTO `user_timeline` (`id`, `user_id`, `following_id`, `unique_key`, `created_at`, `updated_at`) VALUES ('6', '1', '2', '12', '2019-04-22 10:28:22', '2019-04-22 10:28:22'),
('7', '2', '1', '21', '2019-04-22 06:43:45', '2019-04-22 06:43:50');

INSERT INTO `users` (`id`, `firstname`, `lastname`, `description`, `status`, `created_at`, `updated_at`) VALUES ('1', 'Dhani', 'Sulistiyo', 'Description 1', '1', '2019-04-22 11:31:39', '2019-04-22 11:31:45'),
('2', 'Ken', 'Dwinugraha', 'Description 2', '1', '2019-04-22 11:38:43', '2019-04-22 11:38:47'),
('3', 'dhani', 'test', 'test aja', '1', '2019-04-22 10:40:13', '2019-04-22 10:40:13'),
('4', 'dhani', 'test', 'test aja', '1', '2019-04-22 10:42:37', '2019-04-22 10:42:37'),
('5', 'dhani', 'test', 'test aja', '1', '2019-04-22 10:43:02', '2019-04-22 10:43:02');




/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;