import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132118Page } from './s132118.page';

describe('S132118Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132118Page;
  let fixture: ComponentFixture<S132118Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132118Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132118Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
