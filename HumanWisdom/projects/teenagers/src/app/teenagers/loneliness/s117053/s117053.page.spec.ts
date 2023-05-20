import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117053Page } from './s117053.page';

describe('S117053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117053Page;
  let fixture: ComponentFixture<S117053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
