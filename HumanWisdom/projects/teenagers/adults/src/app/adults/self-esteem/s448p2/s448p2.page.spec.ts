import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S448p2Page } from './s448p2.page';

describe('S448p2Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S448p2Page;
  let fixture: ComponentFixture<S448p2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S448p2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S448p2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
