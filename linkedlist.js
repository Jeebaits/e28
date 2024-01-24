// Node Object
class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

// Creat linked list of node objects
class LinkedList{
    constructor(){
        this.head = null; 
        this.size = 0; // basis for counting indices
    }

    // Clear the list
    clearList(){
        this.head = null;
        this.size = 0;
    }

    // Insert node at the start
    insertStart(data){
        this.head = new Node(data, this.head);
        this.size ++;
    }

    // Insert node at the end
    insertEnd(data){
        let node = new Node(data);
        let current;

        if(!this.head){
            this.head = node;
        } else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }

        this.size ++;
    }

    // Insert node based on specific index
    insertPosition(data, index){
        // Check if position is out of range
        if(index > 0 && index > this.size){
            return console.log('slot is not available')
        }
        
        // Check if the index is the start position
        if(index === 0){
            this.insertStart(data);
            return;
        }

        // Otherwise the position is greater than 0 and within the range
        const node = new Node(data);
        let current, previous;

        // Set first to current
        current = this.head;
        let count = 0;

        while(count < index){
            previous = current;
            count ++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;
    }

    // Display nodes from the list
    printLinkedList(){
        let current = this.head; // Latest node

        while(current){
            console.log(current.data, current.next);
            current = current.next;
        }
    }
}

// Invocation of methods
const nodeList = new LinkedList();
nodeList.insertStart(200);
nodeList.insertStart(400);
nodeList.insertEnd(100);
nodeList.insertPosition(300, 1);
nodeList.insertPosition(150, 3);
nodeList.printLinkedList();
nodeList.clearList();
nodeList.printLinkedList();

// const n1 = new Node(100, 2);
// console.log(n1);