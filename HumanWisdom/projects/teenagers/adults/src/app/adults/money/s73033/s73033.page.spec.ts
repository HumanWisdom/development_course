import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73033Page } from './s73033.page';

describe('S73033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73033Page;
  let fixture: ComponentFixture<S73033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
