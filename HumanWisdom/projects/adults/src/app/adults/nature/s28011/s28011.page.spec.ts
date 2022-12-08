import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S28011Page } from './s28011.page';

describe('S28011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S28011Page;
  let fixture: ComponentFixture<S28011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S28011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S28011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
