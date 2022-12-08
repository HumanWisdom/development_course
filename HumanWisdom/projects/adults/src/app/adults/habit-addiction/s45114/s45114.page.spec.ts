import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45114Page } from './s45114.page';

describe('S45114Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45114Page;
  let fixture: ComponentFixture<S45114Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45114Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45114Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
