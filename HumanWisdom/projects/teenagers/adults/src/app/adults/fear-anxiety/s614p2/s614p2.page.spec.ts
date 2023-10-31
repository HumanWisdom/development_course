import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S614p2Page } from './s614p2.page';

describe('S614p2Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S614p2Page;
  let fixture: ComponentFixture<S614p2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S614p2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S614p2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
