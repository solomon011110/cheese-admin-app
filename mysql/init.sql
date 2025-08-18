USE mydatabase;

CREATE TABLE beacons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    Registration_date DATE NOT NULL
);

CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    number VARCHAR(255) NOT NULL UNIQUE,
    gender VARCHAR(10),
    age DATE,
    beacon_pieces INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NULL
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    number VARCHAR(255) NOT NULL UNIQUE,
    gender VARCHAR(10),
    age DATE,
    start_date DATE NOT NULL,
    end_date DATE NULL
);

CREATE TABLE parent_child (
    parent_id INT NOT NULL,
    child_id INT NOT NULL,
    Registration_date DATE NOT NULL,
    FOREIGN KEY (parent_id) REFERENCES users(id),
    FOREIGN KEY (child_id) REFERENCES users(id)
);

CREATE TABLE admin_beacon (
    admin_id INT NOT NULL,
    beacon_id INT NOT NULL,
    order_date DATE NOT NULL,
    FOREIGN KEY (admin_id) REFERENCES admins(id),
    FOREIGN KEY (beacon_id) REFERENCES beacons(id)
);