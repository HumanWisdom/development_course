import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S448p5Page } from './s448p5.page';

describe('S448p5Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S448p5Page;
  let fixture: ComponentFixture<S448p5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S448p5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S448p5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
