import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53114Page } from './s53114.page';

describe('S53114Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53114Page;
  let fixture: ComponentFixture<S53114Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53114Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53114Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
