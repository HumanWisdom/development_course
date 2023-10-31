import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73075Page } from './s73075.page';

describe('S73075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73075Page;
  let fixture: ComponentFixture<S73075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
