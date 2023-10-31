import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61109Page } from './s61109.page';

describe('S61109Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61109Page;
  let fixture: ComponentFixture<S61109Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61109Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61109Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
