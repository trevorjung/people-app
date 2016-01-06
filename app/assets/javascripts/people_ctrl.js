(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope, $http) {

      $scope.setup = function() {
        $http.get("/api/v1/people.json").then(function(response) {
            $scope.people = response.data;
        });
      } 

      // $scope.people = [
    
      //   {
      //     name: "Jxson",
      //     fun_fact: "hairy fingers",
      //     hometown: "SS Titanic",
      //     bioVisible: true
      //   },
      //   {
      //     name: "Hailey",
      //     fun_fact: "Hazelnut Scrunchie",
      //     hometown: "CSU Fullerton",
      //     bioVisible: false
      //   },
      //   {
      //     name: "Harold",
      //     fun_fact: "I love White Castle",
      //     hometown: "1 Turtle Shell Drive, Malibu CA",
      //     bioVisible: true
      //   },
      //   {
      //     name: "Bob",
      //     fun_fact: "Republican",
      //     hometown: "20 Conservative Way",
      //     bioVisible: true
      //   }

      // ];

    
      $scope.toggle = function(person) {
        person.bioVisible =! person.bioVisible
      }

      $scope.addPerson = function(person) {
        var newPerson = {
          name: name,
          bio: bio,
          bioVisible: false
        }
        $scope.people.push(newPerson);
      }

      $scope.deletePerson = function(index) {
        $scope.people.splice(index,1);
      }


  window.$scope = $scope;


  });
}());