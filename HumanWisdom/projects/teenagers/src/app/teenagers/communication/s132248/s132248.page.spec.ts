import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132248Page } from './s132248.page';

describe('S132248Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132248Page;
  let fixture: ComponentFixture<S132248Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132248Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132248Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
