import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62027Page } from './s62027.page';

describe('S62027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62027Page;
  let fixture: ComponentFixture<S62027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
