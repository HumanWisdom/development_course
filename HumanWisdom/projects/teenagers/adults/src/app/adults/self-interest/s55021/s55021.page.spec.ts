import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55021Page } from './s55021.page';

describe('S55021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55021Page;
  let fixture: ComponentFixture<S55021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
