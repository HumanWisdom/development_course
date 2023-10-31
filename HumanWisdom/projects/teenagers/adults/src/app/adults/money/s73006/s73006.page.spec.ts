import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73006Page } from './s73006.page';

describe('S73006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73006Page;
  let fixture: ComponentFixture<S73006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
