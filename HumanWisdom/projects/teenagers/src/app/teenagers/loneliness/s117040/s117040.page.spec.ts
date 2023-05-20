import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117040Page } from './s117040.page';

describe('S117040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117040Page;
  let fixture: ComponentFixture<S117040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
