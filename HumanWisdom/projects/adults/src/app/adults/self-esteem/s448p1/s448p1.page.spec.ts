import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S448p1Page } from './s448p1.page';

describe('S448p1Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S448p1Page;
  let fixture: ComponentFixture<S448p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S448p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S448p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
