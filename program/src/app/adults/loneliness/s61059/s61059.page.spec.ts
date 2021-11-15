import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61059Page } from './s61059.page';

describe('S61059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61059Page;
  let fixture: ComponentFixture<S61059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
