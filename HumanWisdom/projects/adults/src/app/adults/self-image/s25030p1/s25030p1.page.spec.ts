import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25030p1Page } from './s25030p1.page';

describe('S25030p1Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25030p1Page;
  let fixture: ComponentFixture<S25030p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25030p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25030p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
