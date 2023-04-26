import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S110011Page } from './s110011.page';

describe('S110011Page', () => {
  // let  
    let component:  S110011Page;
  let fixture: ComponentFixture<S110011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S110011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S110011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
