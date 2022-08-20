<?php
//Test xml files
// $xml = simplexml_load_file("privacy.xml") or die("cant load xml");
$xml = simplexml_load_file("junk.xml") or die("cant load xml");


$totalSize  = 0;
$totalItems = 0;
$folders = [];
$type = json_decode(json_encode($xml["type"]));

foreach($type as $t){
    $typename = $t;
}

foreach($xml as $record){

foreach(json_decode(json_encode($record['items'])) as $items){
        $totalItems+=intval($items);
}

foreach( json_decode(json_encode($record['sizeBytes'])) as $row){
//total size achived
$totalSize+= intval($row);
    }

$files = json_decode(json_encode($record),true)['file'];
$name = json_decode(json_encode($record),true)['@attributes']['name'];
$items = json_decode(json_encode($record),true)['@attributes']['items'];
$sizeBytes = json_decode(json_encode($record),true)['@attributes']['sizeBytes'];

$files2 = [];
$arr3=[];

for($x = 0; count($files) >$x; $x++){
    array_push($files2,$files[$x]['@attributes']);

}

for($y = 0 ; count($files2) > $y; $y++){
    
    $arr3[$files2[$y]['sizeBytes']] = $files2[$y]['path'];
}

ksort($arr3);
$i=0;

foreach($arr3 as $key=>$value){
$files2[$i]['path'] =$value;
$files2[$i]['sizeBytes'] =$key;
$i++;
}

array_walk($files2, function (& $item) {
    $item['file']=$item['path'];
    $item['size']=$item['sizeBytes'];;
    unset($item['path']);
    unset($item['sizeBytes']);

});
    array_push($folders,new Folders($name,$sizeBytes,$items,$files2));

}

class Folders{
    public $location;
    public $totalSize;
    public $totalItems;
    public $files;
    function __construct($location,$totalSize,$totalItems,$files){
        $this->location = $location;
        $this->totalSize = $totalSize;
        $this->totalItems = $totalItems;
        $this->files = $files;
    }
  
    
}



class Results {
  public $folders;
    function __construct($folders){
        $this->folders = $folders;
    }
}



class ScanResults{
    public $type;
    public $totalSize;
    public $totalItems;
    public $results;

    function __construct($type,$totalSize,$totalItems,$results){
        $this->type = $type;
        $this->totalSize = $totalSize;
        $this->totalItems = $totalItems;
        $this->results = $results;

    }
}



print_r(json_encode(new ScanResults($typename,$totalSize,$totalItems,new Results($folders))));

