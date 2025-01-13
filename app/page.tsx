import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Users, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">MAPiT</span>
              <span className="block text-primary">Analyze your poll data</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              MAPiT provides easy to use interface to analyze and understand your poll data'.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="/about">
                  <Button className="w-full flex items-center justify-center px-8 py-3">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 text-primary mb-4">
                <BarChart2 className="h-full w-full" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Better Decisioning</h3>
              <p className="mt-2 text-base text-gray-500">
                Good data, good analysis leads to best decisions .
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 text-primary mb-4">
                <Users className="h-full w-full" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Varied opinion</h3>
              <p className="mt-2 text-base text-gray-500">
                Consider opinions of different sectors of people.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 text-primary mb-4">
                <BookOpen className="h-full w-full" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Savings</h3>
              <p className="mt-2 text-base text-gray-500">
                Validating the ideas at initial stages reduces lot of financial mishaps in future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Think this might be useful to you?</span>
            <span className="block text-gray-300">Contact us today for a free demo.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Contact us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}