import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132206Page } from './s132206.page';

describe('S132206Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132206Page;
  let fixture: ComponentFixture<S132206Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132206Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132206Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
