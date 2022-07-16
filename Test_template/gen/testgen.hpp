#ifndef TESTGEN_HPP
#define TESTGEN_HPP
#include <random>

namespace tstenv
{
    class input_r
    {
    public:
        int x;
        input_r(int k = -1);
    };

    class output_r
    {
    public:
        int x;
        output_r(int k = -1);
        bool operator==(const output_r& other) const;
        output_r operator+(const output_r& other) const;
    };
}
/* namespace tstenv */

#endif