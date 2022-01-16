<?php

class SortNumber {
    private $arr = [];
    
    function __construct()
    {
        $this->arr = range(1, 100);
        shuffle($this->arr);

        echo "Old Sequence: " . join(" ", $this->arr) . "<br/>";
    }

    function sort() {
        for($i = 0; $i < 100; $i++) {
            for($j = $i; $j >= 0; $j--) {
                if(($j === 0 && $this->arr[$i] < $this->arr[$j]) || ($j > 0 && $this->arr[$i] < $this->arr[$j] && $this->arr[$i] > $this->arr[$j-1])) {
                    $temp = $this->arr[$i];
                    unset($this->arr[$i]);
                    array_splice($this->arr, $j, 0, $temp);
                }
            }
        }

        echo "New Sequence: " . join(" ", $this->arr);
    }
}

$sort = new SortNumber();
$sort->sort();

?>