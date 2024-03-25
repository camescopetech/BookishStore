DROP DATABASE IF EXISTS bookish;
CREATE DATABASE bookish;
USE bookish;

CREATE TABLE bookish_product (
    id_product INT AUTO_INCREMENT,
    product_name VARCHAR(30),
    product_author VARCHAR(30),
    product_price DECIMAL(6, 2),
    product_category VARCHAR(15),
    product_stock INT,
    product_desc TEXT,
    product_img VARCHAR(100),
    PRIMARY KEY(id_product)
);

CREATE TABLE bookish_user (
    id_user INT AUTO_INCREMENT,
    user_name VARCHAR(30),
    user_email VARCHAR(30),
    user_password VARCHAR(30),
    PRIMARY KEY(id_user)
);

INSERT INTO bookish_product (product_name, product_author, product_price, product_category, product_stock, product_desc, product_img)
VALUES
('1984', 'George Orwell', 9.99, 'Science Fiction', 50, 'A dystopian novel set in Airstrip One, a province of the superstate Oceania, in a world of perpetual war, omnipresent government surveillance, and public manipulation.', '1984.jpg'),
('Animal Farm', 'George Orwell', 7.99, 'Fiction', 75, 'A satirical allegory of the Russian Revolution where all animals are equal, but some animals are more equal than others.', 'animal_farm.jpg'),
('The Great Gatsby', 'F. Scott Fitzgerald', 15.99, 'Novel', 30, 'A novel set in the Jazz Age that follows a cast of characters living in the fictional town of West Egg on prosperous Long Island in the summer of 1922.', 'gatsby.jpg'),
('The Catcher in the Rye', 'J.D. Salinger', -1.00, 'Novel', 100, 'A novel that follows the main character, Holden Caulfield, and his mental breakdown following his expulsion from Pencey Prep.', 'catcher_in_the_rye.jpg'),
('To Kill a Mockingbird', 'Harper Lee', 0.00, 'Novel', 20, 'A novel of racial injustice and the destruction of innocence, it also offers critical commentary on gender roles in the American South.', 'to_kill_a_mockingbird.jpg'),
('The Shining', 'Stephen King', 12.99, 'Horror', 80, 'A horror novel about a family that heads to an isolated hotel for the winter where an evil spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.', 'the_shining.jpg'),
('The Stand', 'Stephen King', 25.99, 'Horror', 40, 'A post-apocalyptic horror/fantasy novel where the few survivors of a devastating super-flu pandemic struggle to reestablish civilization while battling an evil force.', 'the_stand.jpg'),
('Pride and Prejudice', 'Jane Austen', 8.99, 'Romance', 60, 'A romantic novel that follows the main character, Elizabeth Bennet, as she deals with issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of the British Regency.', 'pride_and_prejudice.jpg');
('Brave New World', 'Aldous Huxley', 11.99, 'Science Fiction', 45, 'A dystopian novel set in a future society characterized by hedonism, totalitarianism, and technological advancement.', 'brave_new_world.jpg'),
('Fahrenheit 451', 'Ray Bradbury', 10.99, 'Science Fiction', 60, 'A dystopian novel set in a future society where books are outlawed and "firemen" burn any that are found.', 'fahrenheit_451.jpg'),
('The Hobbit', 'J.R.R. Tolkien', 14.99, 'Fantasy', 35, 'A fantasy novel and prequel to The Lord of the Rings that follows the adventures of Bilbo Baggins, a hobbit who is swept into a quest to reclaim the lost Dwarf Kingdom of Erebor from the dragon Smaug.', 'the_hobbit.jpg'),
('The Lord of the Rings', 'J.R.R. Tolkien', 24.99, 'Fantasy', 20, 'A high fantasy epic that follows the journey of the Fellowship of the Ring as they attempt to destroy the One Ring and defeat the Dark Lord Sauron.', 'the_lord_of_the_rings.jpg'),
('The Chronicles of Narnia', 'C.S. Lewis', 19.99, 'Fantasy', 55, 'A series of seven fantasy novels for children that follows the adventures of various children in the magical world of Narnia.', 'the_chronicles_of_narnia.jpg'),
('The Picture of Dorian Gray', 'Oscar Wilde', 8.99, 'Novel', 70, 'A philosophical novel that explores the themes of beauty, morality, and the influence of art on life.', 'dorian_gray.jpg'),
('Dracula', 'Bram Stoker', 7.99, 'Horror', 85, 'A Gothic horror novel that tells the story of Count Dracula, a vampire who moves from Transylvania to England and begins to prey upon the innocent.', 'dracula.jpg'),
('Frankenstein', 'Mary Shelley', 6.99, 'Horror', 90, 'A Gothic horror novel that tells the story of Victor Frankenstein, a young scientist who creates a grotesque but sapient creature in an unorthodox scientific experiment.', 'frankenstein.jpg'),
('The Time Machine', 'H.G. Wells', 5.99, 'Science Fiction', 100, 'A science fiction novel that follows the adventures of an unnamed Time Traveller who journeys into the distant future and encounters the descendants of humanity.', 'time_machine.jpg'),
('The War of the Worlds', 'H.G. Wells', 9.99, 'Science Fiction', 65, 'A science fiction novel that describes an invasion of late Victorian England by Martians equipped with advanced weaponry and war machines.', 'war_of_the_worlds.jpg'),
('The Adventures of Tom Sawyer', 'Mark Twain', 12.99, 'Novel', 40, 'A novel about a young boy growing up along the Mississippi River in the mid-19th century.', 'tom_sawyer.jpg'),
('The Adventures of Huckleberry Finn', 'Mark Twain', 13.99, 'Novel', 30, 'A novel that follows the adventures of Huckleberry Finn and the runaway slave Jim as they travel down the Mississippi River on a raft.', 'huckleberry_finn.jpg'),
('The Grapes of Wrath', 'John Steinbeck', 16.99, 'Novel', 25, 'A novel set during the Great Depression that follows the Joad family as they migrate from Oklahoma to California in search of work.', 'grapes_of_wrath.jpg'),
('The Old Man and the Sea', 'Ernest Hemingway', 10.99, 'Novel', 50, 'A novel about an aging Cuban fisherman who struggles to catch a giant marlin in the Gulf Stream off the coast of Cuba.', 'old_man_and_the_sea.jpg'),
('The Sun Also Rises', 'Ernest Hemingway', 12.99, 'Novel', 35, 'A novel that follows a group of American and British expatriates who travel from Paris to the Festival of San Fermín in Pamplona to watch the running of the bulls and the bullfights.', 'sun_also_rises.jpg'),
('A Farewell to Arms', 'Ernest Hemingway', 14.99, 'Novel', 45, 'A novel set during World War I that follows the story of Lieutenant Frederic Henry, an American ambulance driver serving in the Italian army, and his love affair with an English nurse, Catherine Barkley.', 'farewell_to_arms.jpg'),
('For Whom the Bell Tolls', 'Ernest Hemingway', 16.99, 'Novel', 20, 'A novel set during the Spanish Civil War that tells the story of Robert Jordan, a young American in the International Brigades attached to an antifascist guerilla unit.', 'for_whom_the_bell_tolls.jpg'),
('The Great Gatsby', 'F. Scott Fitzgerald', 15.99, 'Novel', 60, 'A novel set in the Jazz Age that follows a cast of characters living in the fictional town of West Egg on prosperous Long Island in the summer of 1922.', 'great_gatsby.jpg'),
('Tender is the Night', 'F. Scott Fitzgerald', 17.99, 'Novel', 40, 'A novel that follows the life of a young American psychiatrist and his wife, a wealthy former patient, as they move between the French Riviera, Paris, and Switzerland in the 1920s.', 'tender_is_the_night.jpg'),
('The Beautiful and Damned', 'F. Scott Fitzgerald', 13.99, 'Novel', 55, 'A novel that follows the story of Anthony Patch, a 1910s socialite and presumptive heir to a tycoon\'s fortune, his relationship with his wife Gloria, and their reckless lifestyle.', 'beautiful_and_damned.jpg'),
('The Last Tycoon', 'F. Scott Fitzgerald', 11.99, 'Novel', 70, 'An unfinished novel that follows the life of Monroe Stahr, a young Hollywood Professioal and studio executive in the 1930s.', 'last_tycoon.jpg'),
('The Sound and the Fury', 'William Faulkner', 14.99, 'Novel', 25, 'A novel that explores the decline of the Compson family, a once-proud Southern aristocratic family, through the perspective of four different narrators.', 'sound_and_the_fury.jpg'),
('As I Lay Dying', 'William Faulkner', 12.99, 'Novel', 30, 'A novel that tells the story of the death of Addie Bundren and her family\'s quest to honor her wish to be buried in the nearby town of Jefferson.', 'as_i_lay_dying.jpg'),
('Light in August', 'William Faulkner', 16.99, 'Novel', 45, 'A novel that explores the themes of race, sex, and religion in the American South through the stories of several characters.', 'light_in_august.jpg'),
('The Unvanquished', 'William Faulkner', 18.99, 'Novel', 20, 'A novel that tells the story of the Sartoris family during the American Civil War and Reconstruction.', 'unvanquished.jpg'),
('Absalom, Absalom!', 'William Faulkner', 19.99, 'Novel', 50, 'A novel that explores the history of the fictional Sutpen family in the American South before, during, and after the Civil War.', 'absalom_absalom.jpg'),
('To Have and Have Not', 'Ernest Hemingway', 13.99, 'Novel', 65, 'A novel that follows the story of Harry Morgan, a fishing boat captain in Key West, Florida, who becomes involved in smuggling and other criminal activities.', 'to_have_and_have_not.jpg'),
('Across the River and Into the Trees', 'Ernest Hemingway', 15.99, 'Novel', 35, 'A novel that follows the story of Colonel Richard Cantwell, a 50-year-old American army officer, and his love affair with an 18-year-old Italian girl, Renata.', 'across_the_river.jpg'),
('The Garden of Eden', 'Ernest Hemingway', 17.99, 'Novel', 50, 'A novel that explores the themes of gender, sexuality, and identity through the story of a young American writer and his wife on their honeymoon in the French Riviera.', 'garden_of_eden.jpg'),
('Islands in the Stream', 'Ernest Hemingway', 19.99, 'Novel', 25, 'A novel that follows the story of Thomas Hudson, a painter and former soldier, as he navigates his relationships with his three sons, his ex-wife, and his mistress.', 'islands_in_the_stream.jpg'),
('The Snows of Kilimanjaro', 'Ernest Hemingway', 11.99, 'Short Story Collection', 70, 'A collection of short stories that explores themes of love, loss, and the human condition.', 'snows_of_kilimanjaro.jpg'),
('The Old Man and the Sea', 'Ernest Hemingway', 10.99, 'Novella', 85, 'A novella that tells the story of Santiago, an aging Cuban fisherman, and his struggle to catch a giant marlin.', 'old_man_and_the_sea.jpg'),
('The Sun Also Rises', 'Ernest Hemingway', 12.99, 'Novel', 60, 'A novel that follows a group of American and British expatriates as they travel from Paris to Pamplona for the running of the bulls.', 'sun_also_rises.jpg'),
('A Moveable Feast', 'Ernest Hemingway', 14.99, 'Memoir', 40, 'A memoir of Hemingway\'s years as a struggling young writer in Paris in the 1920s.', 'moveable_feast.jpg'),
('The Complete Short Stories of Ernest Hemingway', 'Ernest Hemingway', 24.99, 'Short Story Collection', 20, 'A collection of Hemingway\'s short stories, including some of his most famous works.', 'complete_short_stories.jpg'),
('The Complete Poems of Emily Dickinson', 'Emily Dickinson', 19.99, 'Poetry', 50, 'A collection of Dickinson\'s poetry, including many of her most famous works.', 'complete_poems.jpg'),
('The Collected Poems of Langston Hughes', 'Langston Hughes', 17.99, 'Poetry', 30, 'A collection of Hughes\'s poetry, including many of his most famous works.', 'collected_poems.jpg'),
('The Waste Land', 'T.S. Eliot', 12.99, 'Poetry', 65, 'A long poem that explores the disillusionment and despair of post-World War I Europe.', 'waste_land.jpg'),
('The Love Song of J. Alfred Prufrock', 'T.S. Eliot', 10.99, 'Poetry', 80, 'A poem that explores the inner thoughts and anxieties of the title character.', 'prufrock.jpg'),
('The Collected Poems of Wallace Stevens', 'Wallace Stevens', 22.99, 'Poetry', 45, 'A collection of Stevens\'s poetry, including many of his most famous works.', 'collected_poems_stevens.jpg'),
('The Collected Poems of Robert Frost', 'Robert Frost', 18.99, 'Poetry', 25, 'A collection of Frost\'s poetry, including many of his most famous works.', 'collected_poems_frost.jpg'),
('The Road Not Taken', 'Robert Frost', 9.99, 'Poetry', 70, 'A poem that explores the theme of choices and their consequences.', 'road_not_taken.jpg'),
('Stopping by Woods on a Snowy Evening', 'Robert Frost', 7.99, 'Poetry', 90, 'A poem that explores the theme of the beauty and tranquility of nature.', 'stopping_by_woods.jpg'),
('The Raven', 'Edgar Allan Poe', 6.99, 'Poetry', 100, 'A narrative poem that tells the story of a man who is mourning the loss of his lover and is visited by a talking raven.', 'raven.jpg'),
('Annabel Lee', 'Edgar Allan Poe', 5.99, 'Poetry', 110, 'A poem that tells the story of a man who falls in love with a woman named Annabel Lee when they are both young, but their love is cut short by her untimely death.', 'annabel_lee.jpg');

INSERT INTO bookish_user (user_name,user_email,user_password) VALUES
    ('Azek','azek@gmail.com','sasa');
    
