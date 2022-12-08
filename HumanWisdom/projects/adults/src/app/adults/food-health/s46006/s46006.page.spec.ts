import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46006Page } from './s46006.page';

describe('S46006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46006Page;
  let fixture: ComponentFixture<S46006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
