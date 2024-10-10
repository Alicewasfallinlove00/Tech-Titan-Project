#include <iostream>
using namespace std;

int main() {
    // Regular price of the item
    double regularPrice = 59.95;
    
    // Discount percentage
    double discountPercentage = 20.0;
    
    // Calculate the discount amount
    double discountAmount = (discountPercentage / 100) * regularPrice;
    
    // Calculate the sale price
    double salePrice = regularPrice - discountAmount;
    
    // Output the sale price
    cout << "The sale price of the item is: $" << salePrice << endl;
    
    return 0;
}
