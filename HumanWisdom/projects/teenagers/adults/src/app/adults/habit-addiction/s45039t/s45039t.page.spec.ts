import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45039tPage } from './s45039t.page';

describe('S45039tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45039tPage;
  let fixture: ComponentFixture<S45039tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45039tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45039tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
