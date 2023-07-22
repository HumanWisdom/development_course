import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132116Page } from './s132116.page';

describe('S132116Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132116Page;
  let fixture: ComponentFixture<S132116Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132116Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132116Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
