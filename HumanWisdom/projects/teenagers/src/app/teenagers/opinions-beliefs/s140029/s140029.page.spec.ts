import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140029Page } from './s140029.page';

describe('S140029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140029Page;
  let fixture: ComponentFixture<S140029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
