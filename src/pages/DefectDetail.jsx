import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, LogOut, Trash2 } from 'lucide-react';
import { defects } from '../data/defects';

export default function DefectDetail() {
  const { id } = useParams();
  const defect = defects.find((d) => d.id === id);
  const [formData, setFormData] = useState({ phone: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [cart, setCart] = useState({ total: 100, discount: 0 });
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [items, setItems] = useState([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);

  useEffect(() => {
    if (defect?.id === 'session-management') {
      const timer = setTimeout(() => {
        setIsLoggedIn(true); // Simulating session persistence after logout
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [defect?.id, isLoggedIn]);

  const renderExample = () => {
    switch (defect?.id) {
      case 'broken-button':
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">Try clicking the button below - it won't work!</p>
            <button 
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 cursor-not-allowed opacity-50 w-full sm:w-auto"
              disabled
            >
              Submit Form
            </button>
            <p className="text-sm text-red-500">This button is intentionally disabled to demonstrate a broken button defect.</p>
          </div>
        );

      case 'auth-issues':
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">This form doesn't validate user credentials:</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button 
                className="w-full bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-colors"
                onClick={() => setShowError(true)}
              >
                Login
              </button>
              {showError && (
                <p className="text-sm text-red-500">Security Issue: This form accepts any credentials without validation!</p>
              )}
            </form>
          </div>
        );

      case 'data-handling':
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">Try entering letters in this phone number field:</p>
            <input
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className="text-sm text-red-500">
              {/[a-zA-Z]/.test(formData.phone) ? 'Error: Phone number should not contain letters!' : ''}
            </p>
          </div>
        );

      case 'ui-defects':
        return (
          <div className="space-y-4 overflow-hidden">
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute top-0 left-0 bg-indigo-500 text-white p-3 z-10 rounded-br-lg">
                Overlapping Element
              </div>
              <h3 className="text-lg font-semibold mt-2">Heading</h3>
              <p className="text-sm text-gray-600">This text is partially covered by the overlapping element above.</p>
            </div>
          </div>
        );

      case 'performance':
        return (
          <div className="space-y-4">
            <button 
              className="w-full sm:w-auto bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => setIsLoading(false), 5000);
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  Loading...
                </>
              ) : 'Load Data (5s Delay)'}
            </button>
            <p className="text-sm text-gray-600">
              {isLoading ? 'Simulating a slow response...' : 'Click to simulate a performance issue'}
            </p>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">Insecure password handling example:</p>
            <input
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <div className="text-sm text-red-500 p-3 bg-red-50 rounded-lg">
              Insecure: Password visible in plain text: <span className="font-mono bg-white px-2 py-1 rounded">{formData.password}</span>
            </div>
          </div>
        );

      case 'compatibility':
        return (
          <div className="space-y-4">
            <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg">
              <p className="text-sm">This gradient might not work in older browsers.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm flex items-center gap-2">
                  Chrome <span className="text-green-500">✓</span>
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm flex items-center gap-2">
                  IE 11 <span className="text-red-500">✗</span>
                </p>
              </div>
            </div>
          </div>
        );

      case 'usability':
        return (
          <div className="space-y-6">
            <p className="text-[8px]">This text is intentionally too small to read comfortably.</p>
            <button className="bg-indigo-500 text-white px-2 py-1 text-xs rounded-lg hover:bg-indigo-600">
              Tiny Button
            </button>
            <div className="flex gap-1">
              <button className="bg-indigo-500 text-white w-6 h-6 rounded-lg hover:bg-indigo-600">1</button>
              <button className="bg-indigo-500 text-white w-6 h-6 rounded-lg hover:bg-indigo-600">2</button>
              <button className="bg-indigo-500 text-white w-6 h-6 rounded-lg hover:bg-indigo-600">3</button>
            </div>
            <p className="text-sm text-gray-600">These elements are intentionally hard to interact with.</p>
          </div>
        );

      case 'business-logic':
        return (
          <div className="space-y-4">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-indigo-500" />
                  <span className="font-semibold">Shopping Cart</span>
                </div>
                <span className="text-2xl font-bold">${cart.total}</span>
              </div>
              <button
                className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 w-full transition-colors flex items-center justify-center gap-2"
                onClick={() => setCart({ ...cart, total: cart.total + 10 })}
              >
                Apply 10% Discount
              </button>
              <p className="text-sm text-red-500 mt-3 bg-red-50 p-3 rounded-lg">
                Bug: Clicking "Apply Discount" increases the total instead of reducing it!
              </p>
            </div>
          </div>
        );

      case 'session-management':
        return (
          <div className="space-y-4">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold">Session Status</span>
                <span className={`px-3 py-1 rounded-full text-sm ${isLoggedIn ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {isLoggedIn ? 'Logged In' : 'Logged Out'}
                </span>
              </div>
              <button
                className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 w-full transition-colors flex items-center justify-center gap-2"
                onClick={() => setIsLoggedIn(false)}
              >
                <LogOut className="h-4 w-4" />
                Log Out
              </button>
              <p className="text-sm text-red-500 mt-3 bg-red-50 p-3 rounded-lg">
                Bug: User session persists after logout!
              </p>
            </div>
          </div>
        );

      case 'navigation':
        return (
          <div className="space-y-4">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col gap-3">
                <button
                  className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-colors"
                  onClick={() => window.history.pushState({}, '', '/wrong-page')}
                >
                  Go to Page 1
                </button>
                <button
                  className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
                  onClick={() => window.history.back()}
                >
                  Back
                </button>
              </div>
              <p className="text-sm text-red-500 mt-3 bg-red-50 p-3 rounded-lg">
                Bug: Back button leads to wrong URL!
              </p>
            </div>
          </div>
        );

      case 'broken-image':
        return (
          <div className="space-y-4">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <img
                  src="non-existent-image.jpg"
                  alt="Broken image example"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-sm text-red-500 mt-3 bg-red-50 p-3 rounded-lg">
                Bug: Image source doesn't exist!
              </p>
            </div>
          </div>
        );

      case 'state-management':
        return (
          <div className="space-y-4">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold mb-4">Items List</h3>
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span>{item.name}</span>
                    <button
                      className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                      onClick={() => {
                        // Bug: Item remains in UI after deletion
                        console.log('Item deleted');
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              <p className="text-sm text-red-500 mt-3 bg-red-50 p-3 rounded-lg">
                Bug: Items remain visible after deletion!
              </p>
            </div>
          </div>
        );

      case 'unexpected-popups':
        return (
          <div className="space-y-4">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <button
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 w-full transition-colors flex items-center justify-center gap-2"
                onClick={() => {
                  // Bug: No confirmation dialog
                  console.log('Item deleted without confirmation');
                }}
              >
                <Trash2 className="h-4 w-4" />
                Delete Item
              </button>
              <p className="text-sm text-red-500 mt-3 bg-red-50 p-3 rounded-lg">
                Bug: No confirmation dialog before deletion!
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-6 group">
            <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to list</span>
          </Link>

          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{defect?.title}</h1>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Interactive Example</h2>
              <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
                {renderExample()}
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}