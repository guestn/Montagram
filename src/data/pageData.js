"use strict";

const pageData = [
  {
    'id': 'how-to',
    'name': 'How To',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla nulla. Vestibulum porttitor purus at fringilla posuere. Aenean pretium eros et laoreet vulputate. In pretium placerat elementum. Ut eu ante urna. Fusce lobortis, nulla sit amet efficitur porta, nisl sem vestibulum lorem, et mollis quam libero nec elit. Morbi ut tempor tellus. Aliquam auctor enim libero, a fringilla neque rutrum sed. Maecenas fermentum pulvinar urna vitae finibus. Aenean faucibus, leo ac varius consectetur, lectus mi finibus tellus, auctor mollis magna magna nec mi. Aenean nec lorem nec nunc laoreet pharetra at auctor nulla. Pellentesque dapibus vel odio non gravida. Donec suscipit, lectus eget elementum porta, sem nibh maximus libero, at tempus leo nunc et ligula.'  },
  {
    'id': 'settings',
    'name': 'Settings',
    'content': '<div id="typesDescr"><dl><dt>&lt;%FIRSTNAME%&gt;</dt><dd>A random first name</dd><dt>&lt;%LASTNAME%&gt;</dt><dd>A random surname</dd><dt>&lt;%COMPANY%&gt;</dt><dd>A randomly created company name</dd><dt>&lt;%EMAIL%&gt;</dt><dd>creates an email in the format &lt;%FIRSTNAME%&gt;.&lt;%LASTNAME%&gt;@&lt;%COMPANY%&gt;.com if created in the same object, or creates a random email if not</dd><dt>&lt;%INT(arg1, arg2)%&gt;</dt><dd>creates a random integer in the range between arg1 and arg2</dd><dt>&lt;%DATE(arg1, arg2)%&gt;</dt><dd>creates a random date between date1 and date2</dd>	<dt>&lt;%PHONE%&gt;</dt><dd>creates a random 10 digit phone number</dd><dt>&lt;%PHONE2%&gt;</dt><dd>creates random 10 digit phone number, formatted (000) 000 0000</dd><dt>&lt;%TEXT(arg1)%&gt;</dt><dd>creates arg1 words of random lorem ipsum text</dd></dl></div>'
  },
  {
    'id': 'links',
    'name': 'Links',
    'content': 'Maecenas dictum vestibulum ligula sit amet auctor. Vivamus euismod luctus ex at imperdiet. Sed id justo mauris. Ut et lectus dolor. Mauris nec consectetur ante. Nunc consectetur blandit enim quis tempus. Aliquam dictum risus sit amet molestie placerat. Donec quam ligula, dapibus id metus eget, rhoncus interdum tellus. Nunc vulputate turpis ut leo mattis, et dictum ante maximus. Sed ultrices dolor at nunc volutpat lacinia. Etiam hendrerit orci vel molestie dictum. Morbi tempus enim id enim tempor venenatis. Mauris pulvinar, tortor at sollicitudin faucibus, arcu ante malesuada nunc, vel gravida leo ante quis diam. Ut ultricies diam velit, et pulvinar massa egestas vel. Suspendisse in urna dignissim ipsum scelerisque volutpat.'
    }
 ];

export default pageData;
