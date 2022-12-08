const Node = () => {
    let val;
    let next = null;
    return {
        val,next
    }
}

const LinkedList = (Node) => {

    let data = Node||{};

    const append = (node) => {
        //adds a new node to the end of the list

        if (data.next===undefined) data = node;
        else tail().next = node;
    }

    const prepend = (node) => {
        //adds a new node to the start of the list

        if (data.next===undefined) data = node;
        else {
            node.next = head();
            data = node;
        }
    }

    const insertAt = (node,index) => {
        //adds a new node at given index of the list


        if(node.next===undefined)
            return console.log('Element is not a Node object');
        
        if (index===0) return prepend(node);

        let parent = at(index-1);
        let child = at(index);

        //insert new node between parent and child
        node.next = child;
        parent.next = node;
    }

    const size = () => {
        //returns the length of the list

        if (data.next===undefined) return 0;
        let count = 1;
        let node = data.next;
        while(node){
            count += 1;
            node = node.next;
        }
        return count;
    }

    const head = () => {
        //returns the first node (head) of the list

        return data;
    }

    const tail = () => {
        //returns the last node (tail) of the list

        let node = data;
         while(node.next!==null){
            //loop until tail (next=null) found
             node = node.next;
        }
        return node;
    }

    const at = (index) => {
        //returns the node at a given index of the list

        if(isNaN(index)){
            console.error(`ERROR: Given index (${index}) is not a number`)
            return null
        }

        if(index < 0){
            console.error(`ERROR: ({index}) Index has to be => 0`)
            return null
        }

        let listSize = size();

        if(index>listSize){ 
            console.error
            (`ERROR: Given index ${index} is higher than list size+1`)
            return null;
        }
        
        if (index===0) return head();
        
        if (index===listSize) return tail();
        
        //get list head and following node
        let node = data;
        for (let count = 1; count <= index; count++){
            //get node at given index, save it 
            node = node.next;
        }

        return node
    }

    const pop = () => {
        //removes the last node of the list

        //Deep copy (todo) last node, remove it from list
        //return removed item
        let listSize = size()
        let lastNode = tail()
        let lastNodeParent = at(listSize-2)
        console.log('parent',lastNodeParent);
        lastNodeParent.next = null;
        return lastNode;
    }

    const removeAt = (index) => {
        //removes node at given index of the list
        
        if (index===0){
            let oldData = data;
            let newData = data.next;
            data = newData;
            return oldData;
        }

        //get node
        let parent = at(index-1);
        let node = at(index);

        //removes node
        let newNode = node.next;
        parent.next = newNode;
        return node;
    }

    const contains = (value) => {
        //returns true if given value is in the list, else false

        if(data.val===undefined) return false;

        let node = data;
        while(node && node.val!==undefined){
            if(node.val===value) return true;
            node = node.next;
        }   

        return false;
    } 

    const find = (value) => {
        //returns index of the given node value, else null if not found

        if(data.val===undefined) return null;

        let node = data;
        let index = 0;
        while(node && node.val!==undefined){
            if(node.val===value) return index;
            node = node.next;
            index+=1;
        }   
        return null;
    }

    const toString = () => {
        //Prints to console the linked list in a string format

        if(data.next===undefined) return console.log('(Empty)');

        let node = data;
        let str = `(${node.val})`;
        while(node.next!==null){
             node = node.next;
             str += ` -> (${node.val})`;
        } 
        str += ` -> null`;
        console.log(str);   
    }

    return {
        data,
        append,
        prepend,
        insertAt,
        size,
        head,
        tail,
        at,
        pop,
        removeAt,
        contains,
        find,
        toString,
    }
}

let myLinkedList = LinkedList();
myLinkedList.toString();
console.log('size:',myLinkedList.size());
console.log("---");


let mySecondNode = Node();
mySecondNode.val = 2;

console.log("Append 2")
myLinkedList.append(mySecondNode);
myLinkedList.toString();
console.log('size:',myLinkedList.size());
console.log("---");

let myThirdNode = Node();
myThirdNode.val = 3;

console.log("Append 3")
myLinkedList.append(myThirdNode);
myLinkedList.toString();
console.log('size:',myLinkedList.size());
console.log("---");

let myFirstNode = Node();
myFirstNode.val = 1;

console.log("Prepend 1")
myLinkedList.prepend(myFirstNode);
myLinkedList.toString();
console.log('size:',myLinkedList.size());
console.log("---");

let my4Node = Node();
my4Node.val = 4;

console.log("Append 4")
myLinkedList.append(my4Node);
myLinkedList.toString();
console.log('size:',myLinkedList.size());
console.log("---");

let my5Node = Node();
my5Node.val = 5;

console.log("Insert 5 at index 2")
myLinkedList.insertAt(my5Node,2);
myLinkedList.toString();
console.log('size:',myLinkedList.size());
console.log("---");

console.log('head:',myLinkedList.head());
console.log('tail:',myLinkedList.tail());


console.log('contains 5:',myLinkedList.contains(5));
console.log('contains 6:',myLinkedList.contains(6));

console.log('find index of 5:',myLinkedList.find(5));
console.log('find index of 4:',myLinkedList.find(4));
console.log('find index of 6:',myLinkedList.find(6));

console.log('node at index 1:',myLinkedList.at(1));
console.log('node at index 2:',myLinkedList.at(2));
console.log('node at index 6:',myLinkedList.at(6));
console.log('node at index "a":',myLinkedList.at('a'));


let removed = myLinkedList.pop();
myLinkedList.toString();
console.log('size:',myLinkedList.size());
console.log('removed:',removed);

removed = myLinkedList.removeAt(1);
myLinkedList.toString();
console.log('size:',myLinkedList.size());
console.log('removed:',removed);