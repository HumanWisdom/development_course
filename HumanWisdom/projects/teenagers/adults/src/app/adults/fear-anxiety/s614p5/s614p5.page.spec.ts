import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S614p5Page } from './s614p5.page';

describe('S614p5Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S614p5Page;
  let fixture: ComponentFixture<S614p5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S614p5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S614p5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
