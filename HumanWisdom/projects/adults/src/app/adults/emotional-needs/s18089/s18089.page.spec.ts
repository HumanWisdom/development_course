import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18089Page } from './s18089.page';

describe('S18089Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18089Page;
  let fixture: ComponentFixture<S18089Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18089Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18089Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
