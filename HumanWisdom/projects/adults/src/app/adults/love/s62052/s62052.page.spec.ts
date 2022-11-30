import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62052Page } from './s62052.page';

describe('S62052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62052Page;
  let fixture: ComponentFixture<S62052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
