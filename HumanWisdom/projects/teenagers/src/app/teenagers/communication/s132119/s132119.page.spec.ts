import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132119Page } from './s132119.page';

describe('S132119Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132119Page;
  let fixture: ComponentFixture<S132119Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132119Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132119Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
