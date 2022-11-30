import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46067Page } from './s46067.page';

describe('S46067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46067Page;
  let fixture: ComponentFixture<S46067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
